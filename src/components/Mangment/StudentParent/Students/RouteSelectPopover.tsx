// RouteSelectPopover.tsx
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
import { Route } from 'public/types'

interface RouteSelectPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedRoute: Route | null
  setSelectedRoute: (route: Route | null) => void
  routes: Route[]
}

export function RouteSelectPopover({
  open,
  onOpenChange,
  selectedRoute,
  setSelectedRoute,
  routes,
}: RouteSelectPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedRoute ? (
            <>{selectedRoute.timeSlot.date}</>
          ) : (
            <>+ Select Route</>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Search route by date..." />
          <CommandList>
            <CommandEmpty>No routes found.</CommandEmpty>
            <CommandGroup>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Route ID</TableHead>
                    <TableHead>Route Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routes.map((route) => (
                    <TableRow key={route.id}>
                      <TableCell>
                        <CommandItem
                          value={route.id.toString()}
                          onSelect={(id) => {
                            setSelectedRoute(
                              routes.find((r) => r.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {route.id}
                        </CommandItem>
                      </TableCell>
                      <TableCell>
                        <CommandItem
                          value={route.id.toString()}
                          onSelect={(id) => {
                            setSelectedRoute(
                              routes.find((r) => r.id === Number(id)) || null
                            )
                            onOpenChange(false)
                          }}
                        >
                          {route.timeSlot.date}
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
