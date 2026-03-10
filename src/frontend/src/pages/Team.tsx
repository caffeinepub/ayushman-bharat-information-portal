import SEOHead from "@/components/SEOHead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Lakshya",
    roles: ["Content Creator", "SEO Executive"],
    avatar: "/assets/generated/team-avatar-1.dim_200x200.png",
    initials: "LK",
    responsibilities: [
      "Create engaging and informative content for PM-JAY portal",
      "Develop educational materials about healthcare schemes",
      "Optimize website content for search engines",
      "Implement SEO strategies to improve portal visibility",
      "Conduct keyword research and content optimization",
    ],
  },
  {
    name: "Yuvince",
    roles: ["Design Specialist", "Marketing Strategist"],
    avatar: "/assets/generated/team-avatar-2.dim_200x200.png",
    initials: "YV",
    responsibilities: [
      "Design user-friendly interfaces and visual elements",
      "Ensure accessibility and responsive design standards",
      "Develop marketing campaigns for PM-JAY awareness",
      "Create strategic marketing plans to reach target audiences",
      "Analyze market trends and user engagement metrics",
    ],
  },
  {
    name: "Kritik",
    roles: ["Analytics Coordinator", "Project Manager"],
    avatar: "/assets/generated/team-avatar-3.dim_200x200.png",
    initials: "KR",
    responsibilities: [
      "Track and analyze portal usage and user behavior",
      "Generate insights from data to improve user experience",
      "Coordinate project timelines and deliverables",
      "Manage team collaboration and workflow",
      "Ensure project milestones are met on schedule",
    ],
  },
];

export default function Team() {
  return (
    <>
      <SEOHead
        title="Our Team - PM-JAY Information Portal"
        description="Meet the dedicated team behind the PM-JAY Information Portal, working to make healthcare accessible to all Indian citizens through Ayushman Bharat."
        keywords="PM-JAY team, Ayushman Bharat team, healthcare portal team, National Health Authority"
      />

      <div className="bg-gradient-to-b from-saffron/10 to-transparent py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Our Team
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Dedicated professionals working to bridge the healthcare
              information gap and make PM-JAY accessible to every eligible
              citizen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Avatar className="h-32 w-32 border-4 border-saffron/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-saffron/10 text-2xl font-semibold text-saffron">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <div className="mt-2 flex flex-col gap-1">
                    {member.roles.map((role) => (
                      <p
                        key={role}
                        className="text-base font-medium text-govt-green"
                      >
                        {role}
                      </p>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    Key Responsibilities:
                  </h3>
                  <ul className="space-y-2">
                    {member.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-govt-green" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-muted/50 p-6 text-center md:p-8">
            <h2 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
              Working Together for Better Healthcare
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Our team collaborates with the National Health Authority, state
              governments, and healthcare providers to ensure that PM-JAY
              benefits reach every eligible family. We are committed to
              transparency, accessibility, and continuous improvement of the
              scheme.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
