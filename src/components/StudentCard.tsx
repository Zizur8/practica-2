import { Avatar } from './Avatar'
import { Card } from './Card'
import type { Student } from '../data/students'

interface StudentCardProps {
  student: Student
  onDelete: (studentId: number) => void
}

export const StudentCard = ({ student, onDelete }: StudentCardProps) => {
  return (
    <Card
      header={
        <div className="cluster">
          <Avatar firstName={student.firstName} lastName={student.lastName} />
          <div className="stack stack--tight grow">
            <div className="cluster cluster--spread">
              <h4>{student.firstName} {student.lastName}</h4>
              <span className="badge badge--success">Activo</span>
            </div>
            <p className="text-muted">{student.career}</p>
          </div>
        </div>
      }
      footer={
        <div className="cluster">
          <button className="btn btn--sm" type="button">
            Ver perfil
          </button>
          <button className="btn btn--secondary btn--sm" type="button">
            Editar
          </button>
          <button
            className="btn btn--danger btn--sm"
            type="button"
            onClick={() => onDelete(student.id)}
          >
            EliminaaaaaaaZr
          </button>
        </div>
      }
    >
      <dl className="meta-list">
        <div className="meta-list__row">
          <dt className="meta-list__label">Matricula</dt>
          <dd className="meta-list__value">{student.enrollment}</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Edad</dt>
          <dd className="meta-list__value">{student.age} anos</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Semestre</dt>
          <dd className="meta-list__value">{student.semester}</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Correo</dt>
          <dd className="meta-list__value">{student.email}</dd>
        </div>
      </dl>
    </Card>
  )
}