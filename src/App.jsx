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

        <section className="padding bg bg-white">
          < Case />
        </section>

        <section className="padding">
          < HardFacts />
        </section>

        <section className="padding">
          <Fund />
        </section>

        <section>
          <CustomerReview />
        </section>

        <section>
          < Benefits />
        </section>

        <section>
          {/* < Consultation /> */}
        </section>

        <section>
          < Footer />
        </section>


    </main>
  )

export default App