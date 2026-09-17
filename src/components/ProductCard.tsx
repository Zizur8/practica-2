import { Card } from './Card'

export const ProductCard = () => {
  return (
    <Card header={<h4>Laptop Pro 14</h4>}>
      <p className="text-muted">Computo</p>
      <p>Equipo ligero para desarrollo, con 16 GB de RAM y 512 GB de almacenamiento.</p>
      <dl className="meta-list">
        <div className="meta-list__row">
          <dt className="meta-list__label">Precio</dt>
          <dd className="meta-list__value">$24999</dd>
        </div>
      </dl>
    </Card>
  )
}