import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

type Props = {}

export default function AreasSection({}: Props) {
  return (
    <div className=" h-dvh flex flex-col space-y-10">
      <div className="flex flex-row space-x-10">
        <div className="bg-white grow flex flex-row flex-wrap">
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-[#C5D3E8] m-4">
            <CardHeader>
              <img src="https://placehold.co/100x70/png" alt="placeholder" />
              <CardTitle>Area Name</CardTitle>
              <CardDescription>Students: 20</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="bg-white  w-1/3">1</div>
      </div>
    </div>
  )
}
