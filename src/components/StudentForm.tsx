import { useState, type FormEvent } from 'react'
import { type Student, studentData } from '../data/students'
import { StudentCard } from './StudentCard'


export const StudentForm = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [formData, setFormData] = useState(studentData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newStudent: Student = { ...formData, id: Date.now() }
    setStudents((currentStudents) => [...currentStudents, newStudent])
    setFormData(studentData)
  }

  const handleDelete = (studentId: number) => {
    setStudents((currentStudents) => currentStudents.filter(({ id }) => id !== studentId))
  }

  return (
    <div className="stack">

      <form className="card stack" onSubmit={handleSubmit}>
        <h2>Nuevo estudiante</h2>
        <div className="grid">
          <label className="form-group">
            Nombre
            <input name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Apellido
            <input name="lastName" value={formData.lastName} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Carrera
            <input name="career" value={formData.career} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Matricula
            <input name="enrollment" value={formData.enrollment} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Edad
            <input name="age" value={formData.age} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Semestre
            <input name="semester" value={formData.semester} onChange={handleChange} required />
          </label>
          <label className="form-group">
            Correo
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Agregar estudiante</button>
      </form>




      <div className="grid">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard key={student.id} student={student} onDelete={handleDelete} />
          ))
        ) : (
          <p >No hay estudiantes</p>
        )}
      </div>
    </div>
  )
}