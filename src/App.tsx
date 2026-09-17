import './design-system.css'
import { StudentForm } from './components/StudentForm';


// <main className="page">
//   <div className="container stack">
//       <section className="stack">
//           {/* <MainComponent cualMuestro={1}/> */}
//           {/* <ProductCard />
//           <StudentCard /> */}
//       </section>
//   </div>
//   <div className="container stack">
//       <section className="stack">
//           <Contador />
//           <p>     </p>
//           <Restador />
//       </section>
//   </div>
// </main>


export const App = () => {

  return (
    <main className="page">
      <h1 className="text-center">Practica 2</h1>
      <div className="container stack">
        <section className="stack">
          <StudentForm />
        </section>
      </div>
    </main>
  )
}
