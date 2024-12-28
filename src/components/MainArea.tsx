import React, { useState } from 'react'
import { Button } from './ui/button'
import AreasSection from './AreasSection'
import { Card } from './ui/card'

type Props = {}

export default function MainArea({}: Props) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="p-3">
      <div className="flex flex-row">
        <Button
          variant="link"
          className={`text-lg ${selected === 0 ? 'underline' : ''}`}
          onClick={() => setSelected(0)}
        >
          Areas
        </Button>
        <Button
          variant="link"
          className={`text-lg ${selected === 1 ? 'underline' : ''}`}
          onClick={() => setSelected(1)}
        >
          Buses
        </Button>
        <Button
          variant="link"
          className={`text-lg ${selected === 2 ? 'underline' : ''}`}
          onClick={() => setSelected(2)}
        >
          Students
        </Button>
      </div>
      <div className="h-screen overflow-scroll">
        {selected === 0 && (
          <div className="p-5">
            <AreasSection />
          </div>
        )}
        {selected === 1 && <div>Content for Buses</div>}
        {selected === 2 && <div>Content for Area</div>}
      </div>
    </div>
  )
}
