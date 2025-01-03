import React, { useState } from 'react'
import { Button } from './ui/button'
import AreasSection from './Mangment/Areas/AreasSection'
import { Card } from './ui/card'
import StudentSection from './Mangment/StudentParent/StudentParentSection'

type Props = {}

export default function MainArea({}: Props) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="overflow-scroll h-full ">
      <div className="flex flex-row sticky top-0 bg-gray-300 z-10 p-3">
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
          TimeSlots/Routes
        </Button>
        <Button
          variant="link"
          className={`text-lg ${selected === 2 ? 'underline' : ''}`}
          onClick={() => setSelected(2)}
        >
          Buses/Drivers
        </Button>
        <Button
          variant="link"
          className={`text-lg ${selected === 3 ? 'underline' : ''}`}
          onClick={() => setSelected(3)}
        >
          Students/Parents
        </Button>
      </div>
      <div className="mb-10">
        {selected === 0 && (
          <div className="p-5">
            <AreasSection />
          </div>
        )}
        {selected === 1 && <div>Content for TimeSlots/Routes</div>}
        {selected === 2 && <div>Content for Buses</div>}
        {selected === 3 && (
          <div className="p-5">
            <StudentSection />
          </div>
        )}
      </div>
    </div>
  )
}
