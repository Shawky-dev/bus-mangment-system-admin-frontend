import { Area } from 'public/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table'
import AreaListRow from './AreaListRow'
import { Button } from '../../ui/button'
import { IoAddCircleOutline } from 'react-icons/io5'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AreaEdit from './AreaEdit'
import AreaCreate from './AreaCreate'
type Props = {
  areas: Array<Area>
  handleAreaClick: (id: number) => void
  selectedArea: Area | null
}

export default function AreasList({
  areas,
  handleAreaClick,
  selectedArea,
}: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Area
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AreaCreate />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>Area Name</TableHead>
            <TableHead>No. of Students</TableHead>
            <TableHead>No. of Stops</TableHead>
            <TableHead className="text-right">No. of Buses</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {areas.map((area) => (
            <AreaListRow
              area={area}
              key={area.id}
              handleAreaClick={handleAreaClick}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
