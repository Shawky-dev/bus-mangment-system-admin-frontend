// StopSelectPopover.tsx
import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Stop } from 'public/types'

interface StopSelectPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedStop: Stop | null
  setSelectedStop: (stop: Stop | null) => void
  stops: Stop[]
}

export function StopSelectPopover({
  open,
  onOpenChange,
  selectedStop,
  setSelectedStop,
  stops,
}: StopSelectPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStop ? <>{selectedStop.name}</> : <>+ Select Stop</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Search stop by name..." />
          <CommandList>
            <CommandEmpty>No stops found.</CommandEmpty>
            <CommandGroup>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Stop ID</TableHead>
                    <TableHead>Stop Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stops.map((stop) => (
                    <TableRow key={stop.id}>
                      <TableCell>
                        <CommandItem
                          value={stop.id.toString()}
                          onSelect={(id) => {
                            setSelectedStop(
                              stops.find((s) => s.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {stop.id}
                        </CommandItem>
                      </TableCell>
                      <TableCell>
                        <CommandItem
                          value={stop.id.toString()}
                          onSelect={(id) => {
                            setSelectedStop(
                              stops.find((s) => s.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {stop.name}
                        </CommandItem>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
