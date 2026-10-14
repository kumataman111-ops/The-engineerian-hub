export interface Product {
  id: number
  name: string
  category: string
  shortDescription: string
  description: string
  examples: string[]
  process: string
  kind: 'bracket' | 'plate' | 'block' | 'press' | 'milled'
}

const products: Product[] = [
  { id: 1, name: 'Automotive child parts', category: 'Automotive parts', shortDescription: 'Drawing-led components for automotive assemblies.', description: 'Child parts are individual components that become part of a larger automotive assembly. Engineerian Hub manufactures these components to customer requirements, bringing together cutting, pressing, grinding, and machining work as the part demands.', examples: ['Assembly components', 'Mounting parts', 'Custom metal components'], process: 'Custom manufacturing', kind: 'bracket' },
  { id: 2, name: 'Laser-cut components', category: 'Laser cutting', shortDescription: 'Sheet metal profiles with clean, intricate contours.', description: 'Laser cutting creates metal profiles from customer drawings. Explore this capability for component blanks, shaped plates, and cutouts that require defined contours before further manufacturing or assembly.', examples: ['Profiled plates', 'Sheet metal blanks', 'Custom cutouts'], process: 'Laser cutting', kind: 'plate' },
  { id: 3, name: 'Surface-ground parts', category: 'Surface grinding', shortDescription: 'Flat, finished surfaces for mating components.', description: 'Surface grinding finishes flat metal faces for components where surface condition and fit matter. The required finish, dimensions, and tolerances are determined by the customer drawing and reviewed for the application.', examples: ['Flat plates', 'Mating surfaces', 'Ground metal components'], process: 'Surface grinding', kind: 'block' },
  { id: 4, name: 'Pressed metal parts', category: 'Metal press', shortDescription: 'Formed sheet metal parts for repeat applications.', description: 'Metal press work shapes sheet metal into component forms. This capability supports drawing-based parts for automotive assemblies and other manufacturing applications, with tooling and production requirements reviewed per project.', examples: ['Formed brackets', 'Pressed profiles', 'Sheet metal components'], process: 'Metal press work', kind: 'press' },
  { id: 5, name: 'VMC-machined components', category: 'VMC machining', shortDescription: 'Machined features. Purpose-built geometry.', description: 'Vertical machining centre work creates detailed metal components with features such as pockets, slots, holes, and machined faces. Each project is assessed against its drawing, material, and manufacturing requirements.', examples: ['Machined blocks', 'Slotted components', 'Custom-feature parts'], process: 'VMC machine work', kind: 'milled' },
]
export default products
