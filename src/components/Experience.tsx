import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import Timeline from "./Timeline";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";

export default function Experience() {
  return (
    <Tabs defaultValue="education" className="w-full">
      <TabsList>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="work">Work</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline items={careerData.career} />
      </TabsContent>
      <TabsContent value="education">
        <Timeline items={educationData.education} />
      </TabsContent>
    </Tabs>
  );
}
