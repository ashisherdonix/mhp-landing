import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Brain, Users, Home as HomeIcon, User, MessageSquare, Stethoscope } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">MindBridge</span> Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Building the mental health infrastructure layer for Indian schools—one platform, full clinical spectrum
          </p>
        </div>

        {/* The Journey */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Student Journey</h2>
            <p className="text-lg text-muted-foreground">
              Seamless progression from "I'm just curious" to "I need serious help"—without ever starting over
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-8 h-8 text-primary mr-4" />
                  Step 1: Anonymous Entry
                </CardTitle>
                <CardDescription>Zero barrier to entry—no login, no name, no fear</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A student hears about us—maybe from a school assembly, a friend, or a poster. They're curious but terrified. 
                  They don't want anyone to know.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  They open the app. <strong>No login. No name. No phone number.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  An AI-powered conversational interface asks gentle questions: "What's been on your mind? How are things 
                  at home? At school? With friends?" The student shares—maybe for the first time ever. The AI listens, 
                  validates, and begins to understand what kind of support they might need.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-primary font-medium">
                    "It sounds like you're dealing with a lot. Talking to someone who specializes in exactly this could 
                    really help. Would you like to connect with a counsellor? Everything stays confidential."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="w-8 h-8 text-secondary mr-4" />
                  Step 2: Confidential Counselling
                </CardTitle>
                <CardDescription>AI-powered professional matching—not just any available slot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The student decides to take the leap. Creates an account. Identity known to the platform, but protected 
                  by strict confidentiality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI does something no school counsellor can: it matches them with the right professional. Not just any 
                  available slot—but someone who specializes in their specific issue, speaks their language, and fits their 
                  preference for online or offline.
                </p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium">Parental pressure + Hindi speaker</p>
                    <p className="text-xs text-muted-foreground">→ Dr. Sharma, family dynamics specialist</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium">Bullying + prefers texting</p>
                    <p className="text-xs text-muted-foreground">→ Counsellor trained in peer issues, chat-based</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium">ADHD symptoms</p>
                    <p className="text-xs text-muted-foreground">→ Assessment specialist for diagnosis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Stethoscope className="w-8 h-8 text-accent-foreground mr-4" />
                  Step 3: Psychiatric Care When Needed
                </CardTitle>
                <CardDescription>Full spectrum care—we have psychiatrists, not just counsellors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  This isn't a counselling-only platform. We have psychiatrists.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If a student needs medication—for depression, anxiety, ADHD—they don't get referred out to start the 
                  whole process again with a stranger. They get escalated seamlessly within our system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Same platform. Same case history. Same trust relationship.</strong> The psychiatrist sees everything 
                  the counsellor has documented. The student doesn't have to re-explain their trauma. Treatment starts faster. 
                  Compliance is better.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <HomeIcon className="w-8 h-8 text-amber-600 mr-4" />
                  Step 4: Ecosystem Intervention
                </CardTitle>
                <CardDescription>Sometimes the student isn't the problem—the environment is</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We don't just treat the student. We treat the system around them.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Toxic Parenting</h4>
                    <p className="text-sm text-muted-foreground">
                      Parent counselling framed as "supporting your child's success," not "you're a bad parent"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Classroom Bullying</h4>
                    <p className="text-sm text-muted-foreground">
                      Work with teachers on intervention strategies and classroom culture
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Harmful Teacher Behavior</h4>
                    <p className="text-sm text-muted-foreground">
                      Help schools address problematic staff appropriately and confidentially
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Three-Sided Platform */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Three-Sided Platform</h2>
            <p className="text-lg text-muted-foreground">Students, parents, teachers, and administrators—all connected</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-6 h-6 text-primary mr-3" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Anonymous AI screening (zero barrier to entry)</li>
                  <li>• Confidential counselling with AI-matched specialists</li>
                  <li>• Online and offline session options</li>
                  <li>• Psychiatric care including diagnosis and medication</li>
                  <li>• Anonymous reporting channel for abuse, harassment, misconduct</li>
                  <li>• Continuous care, not one-off conversations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HomeIcon className="w-6 h-6 text-secondary mr-3" />
                  For Parents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Education on adolescent mental health (destigmatization)</li>
                  <li>• Self-referral for parenting support</li>
                  <li>• Family counselling pathways</li>
                  <li>• Visibility into child's engagement (not content) with consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-accent-foreground mr-3" />
                  For Teachers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Training on recognizing student distress</li>
                  <li>• Consultation with mental health professionals</li>
                  <li>• Tools to create supportive classroom environments</li>
                  <li>• Self-care resources (teachers are burned out too)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-6 h-6 text-amber-600 mr-3" />
                  For School Administrators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Aggregate mental health insights (anonymized)</li>
                  <li>• Compliance and duty-of-care documentation</li>
                  <li>• Early warning systems for school-wide issues</li>
                  <li>• Evidence of impact for board reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why We Win */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Why We Win</CardTitle>
            <CardDescription>Built for India. Built to work. Built to scale.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">The Anonymous Bridge</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Every other solution requires students to identify themselves before getting help. That's a massive barrier.
                </p>
                <p className="text-sm text-muted-foreground">
                  We let them explore, understand their issues, and build trust—all before they reveal who they are. 
                  <strong className="text-primary">Anonymity isn't a feature. It's the funnel.</strong>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-secondary">Full Clinical Spectrum</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  We're not a counselling app that refers out the hard cases. We handle depression, anxiety, ADHD, trauma, 
                  family dysfunction.
                </p>
                <p className="text-sm text-muted-foreground">
                  One platform, complete care. <strong className="text-secondary">Same trust relationship, start to finish.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="mr-4">Schedule Demo</Button>
          <Button variant="outline" size="lg">Contact Sales</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}