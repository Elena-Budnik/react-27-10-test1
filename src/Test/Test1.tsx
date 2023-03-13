import { useState } from 'react'
import './Test1.scss'
type Props = {}
const Test1 = (props: Props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  return (
    <div>
          <form className="application-form">
                <h1>First task </h1>
                <button type="button" onClick={() => setCount(count + 1)}>
                    change count ({count})
                </button>

                <button type="button" onClick={() => setCount2(count2 + 1)}>
                    change count ({count2})
                </button>
                
                 <button type="button" onClick={() => setCount3(count3 + 1)}>
                    change count ({count3})
                 </button>
            </form>
    </div>
  )
}
export default Test1