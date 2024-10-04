import { Button } from "@/components/ui/button"

export default function ButtonsPage() {
    return (
        <div className='flex flex-col p-4 space-y-4 max-w-[200px]'>
            <Button>Default</Button>
            <Button variant='primary'>Primary</Button>
            <Button>Primary Outline</Button>
        </div>
    )
}
