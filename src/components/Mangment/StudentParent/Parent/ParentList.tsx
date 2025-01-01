import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table'
import { IoAddCircleOutline } from 'react-icons/io5'
import AreaEdit from '../../Areas/AreaEdit'
import { Parent } from 'public/types'
import ParentListRow from './ParentListRow'

type Props = {
  parents: Array<Parent>
}

export default function ParentList({ parents }: Props) {
  return (
    <Card className="p-2 grow">
      <Table>
        <TableCaption>
          <Dialog>
            <DialogTrigger>
              <Button>
                <IoAddCircleOutline />
                Add Parent
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[calc(100dvh-50px)] overflow-y-scroll max-w-4xl">
              <AreaEdit />
            </DialogContent>
          </Dialog>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Parent Pic</TableHead>
            <TableHead>Parent Name</TableHead>
            <TableHead>Parent Email</TableHead>
            <TableHead className="text-right">Student</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.map((parent) => (
            <ParentListRow parent={parent} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
