import React from 'react'

type Props = {}

export const getValueOrDefault = (
  value,
  defaultValue = <p className="italic text-gray-400 ">No Value</p>
) => (value ? value : defaultValue)
export default function functions({}: Props) {
  return <div>functions</div>
}
