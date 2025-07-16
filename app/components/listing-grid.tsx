import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface GridItem {
    title: string,
    subheading: string,
    miniheading: string,
    price: number,
    img: {
        src: string
        alt: string
    },
}

const GridCard = (content: GridItem) => {
    return (
            <div>
                <a href="https://ezraharris.com">
                    <Card className="w-80 h-[300] overflow-hidden flex">
                        <CardHeader>
                            <img src={content.img.src} alt={content.img.alt} className="object-center w-full object-cover h-50 rounded-md"></img>
                            <p className="font-bold m-0">${content.price}</p>
                            <CardTitle className="font-normal">{content.title}</CardTitle>
                            <CardDescription>
                                <p>{content.subheading}</p>
                                <p>{content.miniheading}</p>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </a>
            </div>
    )
}
export const ListingGrid = ({imageSrc}) => {
    return (
        <div className="flex flex-wrap w-screen h-full gap-2 p-8">
            <GridCard title="1999 Honda Accord" subheading="San Francisco" miniheading="600k miles" price={600} img={{src: imageSrc, alt: "a randomly generated prop"}}></GridCard>
            <GridCard title="1999 Honda Accord" subheading="San Francisco" miniheading="600k miles" price={600} img={{src: imageSrc, alt: "a randomly generated prop"}}></GridCard>

        </div>
    )
}