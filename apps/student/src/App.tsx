import { Button } from "@repo/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@repo/ui/card"


function App() {
  return (
    <>
      <h1>Student App</h1>
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>Student Dashboard</CardTitle>
          <CardDescription>View and manage your academic information</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="lg">Click me</Button>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="secondary">Close</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default App
