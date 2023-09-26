import { Nav } from './components';
import {    
  Hero,
  Case,
  HardFacts,
  Fund,
  CustomerReview,
  Benefits,
  Consultation,
  Footer
} from './sections';

const App = () => (
    <main className="relative">

        <Nav />

        <section>
            < Hero/>
        </section>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </main>
  )

export default App