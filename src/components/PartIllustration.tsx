import type { Product } from '../data/products'

export function PartIllustration({ kind, id }: { kind: Product['kind']; id: number }) {
  const metal = `metal-${id}`
  return <svg viewBox="0 0 400 250" role="img" aria-label={`Illustrative ${kind} metal component`}>
    <defs><linearGradient id={metal} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f4f5f1"/><stop offset=".35" stopColor="#bfc4c1"/><stop offset=".62" stopColor="#e5e7e2"/><stop offset="1" stopColor="#7a8480"/></linearGradient></defs>
    <ellipse cx="206" cy="203" rx="123" ry="17" fill="#26322b" opacity=".1"/>
    <g stroke="#727d76" strokeWidth="1.5" strokeLinejoin="round">
    {kind === 'bracket' || kind === 'press' ? <><path d="M91 166L196 194 314 132 207 104Z" fill={`url(#${metal})`}/><path d="M91 166V85L124 67 155 76V151L196 164 196 194Z" fill={`url(#${metal})`}/><path d="M196 194V164L314 104V132Z" fill="#8f9993"/><path d="M155 76L124 67 91 85 123 96Z" fill="#eef0eb"/><ellipse cx="122" cy="119" rx="10" ry="14" fill="#5d6962"/><ellipse cx="245" cy="147" rx="15" ry="8" fill="#5d6962"/>{kind==='press'&&<path d="M267 143V81L302 62 314 70V132" fill={`url(#${metal})`}/>}</> : kind === 'plate' ? <><path d="M71 159L184 85 326 120V139L213 213 71 178Z" fill="#929c96"/><path d="M71 159L184 85 326 120 213 194Z" fill={`url(#${metal})`}/><path d="M151 148L197 117 246 130 200 161Z" fill="#65746a"/>{[[112,158],[186,107],[282,131],[211,177]].map(([cx,cy])=><ellipse key={cx} cx={cx} cy={cy} rx="8" ry="5" fill="#56645b"/>)}</> : <><path d="M95 119L223 70 312 104 187 159Z" fill={`url(#${metal})`}/><path d="M95 119V174L187 209V159Z" fill="#a5aea8"/><path d="M187 159V209L312 155V104Z" fill="#7a8980"/>{kind==='milled'? <><path d="M149 119L226 89 272 107 195 140Z" fill="#64736a"/><path d="M160 123L226 99 255 112 195 137Z" fill="#aeb7b0"/><ellipse cx="122" cy="121" rx="7" ry="4" fill="#5b6960"/><ellipse cx="285" cy="107" rx="7" ry="4" fill="#5b6960"/></>:<>{[0,1,2,3,4,5].map(i=><path key={i} d={`M${106+i*12} ${119+i*4}L${228+i*12} ${74+i*4}`} stroke="#fff" opacity=".3"/>)}</>}</>}
    </g>
  </svg>
}
