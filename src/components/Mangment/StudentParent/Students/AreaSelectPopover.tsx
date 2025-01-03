// AreaSelectPopover.tsx
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
import { Area } from 'public/types'

interface AreaSelectPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedArea: Area | null
  setSelectedArea: (area: Area | null) => void
  areas: Area[]
}

export function AreaSelectPopover({
  open,
  onOpenChange,
  selectedArea,
  setSelectedArea,
  areas,
}: AreaSelectPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedArea ? <>{selectedArea.name}</> : <>+ Select Area</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Search area by name..." />
          <CommandList>
            <CommandEmpty>No areas found.</CommandEmpty>
            <CommandGroup>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Area ID</TableHead>
                    <TableHead>Area Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areas.map((area) => (
                    <TableRow key={area.id}>
                      <TableCell>
                        <CommandItem
                          value={area.id.toString()}
                          onSelect={(id) => {
                            setSelectedArea(
                              areas.find((a) => a.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {area.id}
                        </CommandItem>
                      </TableCell>
                      <TableCell>
                        <CommandItem
                          value={area.id.toString()}
                          onSelect={(id) => {
                            setSelectedArea(
                              areas.find((a) => a.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {area.name}
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
