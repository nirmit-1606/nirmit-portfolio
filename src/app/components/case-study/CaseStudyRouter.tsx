import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { IntuitCaseStudy } from "./projects/Intuit";
import { DeccanHouseCaseStudy } from "./projects/DeccanHouse";
import { DeccanCafeCaseStudy } from "./projects/DeccanCafe";
import { TradeMindCaseStudy } from "./projects/Trademind";
import { PantrySmartCaseStudy } from "./projects/PantrySmart";
import { TutorReserveCaseStudy } from "./projects/TutorReserve";

const PROJECTS: Record<string, React.ComponentType> = {
  "1": IntuitCaseStudy,
  "2": DeccanHouseCaseStudy,
  "3": TradeMindCaseStudy,
  "4": PantrySmartCaseStudy,
  "5": TutorReserveCaseStudy,
  "6": DeccanCafeCaseStudy,
};

export function CaseStudyRouter() {
  const { id } = useParams<{ id: string }>();
  const Project = id ? PROJECTS[id] : undefined;

  if (!Project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-foreground mb-4">Case study not found</h1>
          <Button asChild>
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to work
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return <Project />;
}
