import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">MindBridge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're not building an app. We're building the mental health layer for Indian education.
          </p>
        </div>

        {/* Vision */}
        <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">The Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In five years, every school in India considers mental health infrastructure as essential as 
              a computer lab or a library.
            </p>
            <p className="text-lg font-medium text-foreground/90">
              We're the default provider. The trusted name. The platform that got there first and built it right.
            </p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">One Final Point</CardTitle>
          </CardHeader>
          <CardContent className="text-center max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every year, thousands of Indian students suffer in silence because they're too scared to ask for help, 
              too ashamed to tell their parents, too distrustful of school authorities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Some of them don't make it.
            </p>
            <p className="text-lg font-medium text-foreground/90">
              We're building the bridge that lets them take the first step without fear—and walks with them 
              all the way to recovery.
            </p>
            <p className="text-xl font-semibold text-primary">
              That's not just a business. That's a mission.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <p className="text-sm text-muted-foreground">Partner Schools</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-secondary mb-2">50,000+</div>
            <p className="text-sm text-muted-foreground">Students Helped</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-accent-foreground mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Mental Health Professionals</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Crisis Support</p>
          </Card>
        </div>

        {/* Team */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Leadership Team</CardTitle>
            <CardDescription className="text-center">Experienced professionals in education, technology, and mental health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="font-semibold mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-sm text-muted-foreground mb-2">CEO & Co-founder</p>
                <p className="text-xs text-muted-foreground">Former Principal, 20+ years in education</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="font-semibold mb-1">Dr. Priya Sharma</h3>
                <p className="text-sm text-muted-foreground mb-2">Chief Clinical Officer</p>
                <p className="text-xs text-muted-foreground">Clinical Psychologist, Child Mental Health Expert</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="font-semibold mb-1">Arjun Patel</h3>
                <p className="text-sm text-muted-foreground mb-2">CTO & Co-founder</p>
                <p className="text-xs text-muted-foreground">Former Google, AI/ML Expert</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advisors */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Advisory Board</CardTitle>
            <CardDescription>Guided by experts in education policy and mental health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Sanjay Gupta</h4>
                  <p className="text-sm text-muted-foreground">Former Secretary, Ministry of Education</p>
                  <p className="text-xs text-muted-foreground">Education Policy Expert</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Meera Krishnan</h4>
                  <p className="text-sm text-muted-foreground">Director, NIMHANS</p>
                  <p className="text-xs text-muted-foreground">Adolescent Mental Health Specialist</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-primary">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">Building safe spaces for vulnerable conversations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-secondary">🔬</span>
                </div>
                <h3 className="font-semibold mb-2">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">Grounded in research and clinical best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-accent-foreground">🌍</span>
                </div>
                <h3 className="font-semibold mb-2">Inclusive</h3>
                <p className="text-sm text-muted-foreground">Culturally sensitive and accessible to all students</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investors */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Backed by Leading Investors</CardTitle>
            <CardDescription>Supported by organizations focused on education and social impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="text-center text-muted-foreground">
                <div className="h-12 bg-muted/30 rounded flex items-center justify-center">
                  EdTech Ventures
                </div>
              </div>
              <div className="text-center text-muted-foreground">
                <div className="h-12 bg-muted/30 rounded flex items-center justify-center">
                  Social Alpha
                </div>
              </div>
              <div className="text-center text-muted-foreground">
                <div className="h-12 bg-muted/30 rounded flex items-center justify-center">
                  Omidyar Network
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6">Help us transform mental health support in schools</p>
          <Button size="lg" className="mr-4">Schedule Demo</Button>
          <Button variant="outline" size="lg">View Careers</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}