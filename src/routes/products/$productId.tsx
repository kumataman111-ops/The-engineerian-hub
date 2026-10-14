import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Layers3 } from 'lucide-react'
import products from '../../data/products'
import { PartIllustration } from '../../components/PartIllustration'
export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = products.find(p=>String(p.id)===params.productId)
    if(!product) throw notFound()
    return product
  },
  notFoundComponent: () => <main className="detail section"><h1>Capability not found</h1><Link to="/">Return to catalog</Link></main>,
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? 'Capability not found'} | Engineerian Hub` }] }),
})
function ProductDetail() {
  const p=Route.useLoaderData()
  return <><header className="header"><Link className="brand" to="/"><Layers3/><span>ENGINEERIAN<span className="brand-hub">HUB</span></span></Link><Link to="/" hash="catalog" className="text-button"><ArrowLeft size={17}/> Back to catalog</Link></header><main className="detail section"><p className="eyebrow muted">ENGINEERIAN HUB / EH–0{p.id}</p><div className="detail-grid"><div className="detail-image"><PartIllustration kind={p.kind} id={p.id}/><span>ILLUSTRATIVE COMPONENT FORM</span></div><div><p className="product-category">{p.process}</p><h1>{p.name}</h1><p className="detail-description">{p.description}</p><h2>Application examples</h2><ul>{p.examples.map(x=><li key={x}>{x}</li>)}</ul><div className="spec-note"><h3>Made to your requirements</h3><p>Dimensions, material grades, tolerances, quantities, and finishing are specific to each drawing. These examples illustrate the capability and are not stock items or verified specifications.</p></div><Link to="/" hash="catalog" className="button dark">Explore all capabilities <ArrowRight size={18}/></Link></div></div></main><footer><span>ENGINEERIAN HUB</span><p>Parts. Processes. Possibilities.</p></footer></>
}
