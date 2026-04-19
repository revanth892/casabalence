import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Casabalence</CardTitle>
          <CardDescription className="text-center">
            Next.js + Tailwind CSS + shadcn/ui configured correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="demo" className="text-sm font-medium">
              Demo Input
            </label>
            <Input id="demo" placeholder="Enter something..." />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            This project is ready for development with Tailwind v4 and shadcn.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-2">
          <Button variant="outline">Learn More</Button>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
