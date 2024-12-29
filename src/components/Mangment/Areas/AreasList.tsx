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
type Props = {
  areas: Array<Area>
}

export default function AreasList({ areas }: Props) {
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
            <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
              <AreaEdit />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Area Location</TableHead>
            <TableHead>Area Name</TableHead>
            <TableHead>No. of Students</TableHead>
            <TableHead>No. of Routes</TableHead>
            <TableHead>No. of DroppOffPickUps</TableHead>
            <TableHead className="text-right">No. of Spots</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {areas.map((area) => (
            <AreaListRow area={area} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
