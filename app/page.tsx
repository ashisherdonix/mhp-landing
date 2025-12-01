import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Shield, Clock, Globe, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section - B2B Focus */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="ml-2">Pilot programs running in leading schools across India</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            India's First <span className="text-primary">AI-Powered</span> Mental Health System for Schools
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A full-stack mental health infrastructure built exclusively for Indian schools—from anonymous first contact to psychiatric care, all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Book Demo
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 text-lg px-8">
              View Pricing
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>24/7 Crisis Support</span>
            </div>
            <div className="flex items-center justify-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>30-Day Setup</span>
            </div>
            <div className="flex items-center justify-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>Multi-language</span>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Mental Health Crisis in Indian Schools</CardTitle>
              <CardDescription className="text-center">The numbers are brutal—and the current solutions are broken</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">7-10%</div>
                  <p className="text-sm text-muted-foreground">of Indian adolescents struggle with mental health conditions</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">Highest</div>
                  <p className="text-sm text-muted-foreground">youth suicide rates globally</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">Massively</div>
                  <p className="text-sm text-muted-foreground">underdiagnosed ADHD cases</p>
                </div>
              </div>
              <div className="bg-background/50 p-6 rounded-lg">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>The current solutions are broken:</strong>
                </p>
                <div className="space-y-3 text-foreground/70 text-left">
                  <p><strong>School counsellors?</strong> Most schools don't have one. Those that do are undertrained, overwhelmed, and students don't trust them because they're seen as part of the school administration.</p>
                  <p><strong>Private psychiatrists?</strong> Expensive, inaccessible for most families, and carry massive stigma. Parents won't take their kids because "log kya kahenge."</p>
                  <p><strong>Mental health apps?</strong> Generic, Western-designed, no clinical depth, no continuity of care, no integration with the school ecosystem.</p>
                  <p><strong>Helplines?</strong> One-time conversations. No follow-up. No treatment.</p>
                  <p className="text-center font-medium text-foreground/80 pt-2">
                    <strong>The result? Students suffer in silence. Issues escalate. By the time anyone notices, it's a crisis.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Solution */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Building India's Mental Health Infrastructure for Schools</h2>
            <p className="text-lg text-muted-foreground">One platform. Three user types. Full clinical spectrum.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Anonymous Entry Bridge</CardTitle>
                <CardDescription>
                  No login. No name. No fear. Students explore their concerns through AI-powered conversations before committing to care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 text-secondary">AI</div>
                </div>
                <CardTitle className="text-secondary">AI-Powered Specialist Matching</CardTitle>
                <CardDescription>
                  Not just any available slot—the right professional for their specific issue, language preference, and treatment needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/30 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/15 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 text-accent-foreground">+</div>
                </div>
                <CardTitle className="text-accent-foreground">Full Clinical Spectrum</CardTitle>
                <CardDescription>
                  From counselling to psychiatric care to ecosystem intervention. Complete care without starting over.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Student Journey */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Student Journey</h2>
            <p className="text-lg text-muted-foreground">From "I'm just curious" to "I need serious help"—seamless progression without starting over</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  Step 1: Anonymous Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A student opens the app. No login. No name. No phone number. An AI-powered conversation asks gentle questions: 
                  "What's been on your mind? How are things at home?" The student shares—maybe for the first time ever. 
                  The AI listens, validates, and understands what kind of support they might need. No commitment. No exposure. No risk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded flex items-center justify-center mr-3 text-sm">AI</div>
                  Step 2: Confidential Counselling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to take the leap? Student creates an account—identity protected by strict confidentiality. 
                  Our AI matches them with the right specialist: someone who handles their specific issue, speaks their language, 
                  fits their preference for online/offline. Struggling with parental pressure and speaks Hindi? Meet Dr. Sharma 
                  who specializes in family dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded flex items-center justify-center mr-3 text-sm">+</div>
                  Step 3: Psychiatric Care When Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Need medication for depression, anxiety, ADHD? No referral to strangers. Seamless escalation within our system. 
                  Same platform. Same case history. Same trust relationship. The psychiatrist sees everything—no re-explaining trauma. 
                  Treatment starts faster. Compliance is better.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HomeIcon className="w-6 h-6 text-amber-500 mr-3" />
                  Step 4: Ecosystem Intervention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sometimes the student isn't the problem—the environment is. Toxic parenting? We offer parent counselling 
                  framed as "supporting your child's success." Classroom bullying? We work with teachers on intervention strategies. 
                  We don't just treat the student. We treat the system around them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why We Win */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why We Win</h2>
            <p className="text-lg text-muted-foreground">Built for India. Built to work. Built to scale.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">The Anonymous Bridge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Every other solution requires students to identify themselves before getting help. That's a massive barrier.
                </p>
                <p className="text-muted-foreground">
                  We let them explore, understand their issues, and build trust—all before they reveal who they are. 
                  By the time they identify themselves, they're already committed to getting help.
                </p>
                <p className="font-medium text-primary">Anonymity isn't a feature. It's the funnel.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-secondary">Built for India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Multi-language support. Culturally aware framing. Pricing that works for Indian schools. 
                  Understanding of the Indian education pressure cooker.
                </p>
                <p className="text-muted-foreground">
                  Not a Western app with a Hindi translation. Built from the ground up for this market.
                </p>
                <p className="font-medium text-secondary">Cultural intelligence at every layer.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-6 leading-relaxed">
              Every year, thousands of Indian students suffer in silence because they're too scared to ask for help, 
              too ashamed to tell their parents, too distrustful of school authorities. Some of them don't make it.
            </p>
            <p className="text-lg font-medium text-foreground/90 max-w-3xl mx-auto mb-8">
              We're building the bridge that lets them take the first step without fear—and walks with them all the way to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Demo
              </Button>
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5">
                View Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
