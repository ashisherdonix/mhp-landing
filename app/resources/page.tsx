import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Resources</span> & Research
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Evidence-based insights and practical guides for school mental health
          </p>
        </div>

        {/* Featured Research */}
        <Card className="mb-16 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Featured Research</CardTitle>
            <CardDescription>Latest findings in student mental health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Anonymous Access Impact Study</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Research shows 3x higher engagement when students can access mental health support anonymously.
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">AI Matching Effectiveness Report</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  89% accuracy in professional matching leads to better outcomes and faster recovery times.
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guides */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📋 Implementation Guides</CardTitle>
              <CardDescription>Step-by-step setup and best practices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">• 30-Day Implementation Checklist</p>
                <p className="text-sm font-medium">• Staff Training Materials</p>
                <p className="text-sm font-medium">• Student Onboarding Guide</p>
                <p className="text-sm font-medium">• Crisis Response Protocols</p>
                <p className="text-sm font-medium">• Parent Communication Kit</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📊 Research & Data</CardTitle>
              <CardDescription>Evidence-based insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">• Student Mental Health Trends 2024</p>
                <p className="text-sm font-medium">• Anonymous Platform Efficacy Study</p>
                <p className="text-sm font-medium">• AI Intervention Outcomes Report</p>
                <p className="text-sm font-medium">• School ROI Analysis</p>
                <p className="text-sm font-medium">• Comparative Platform Study</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🎓 Training Materials</CardTitle>
              <CardDescription>Educational content for staff</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">• Mental Health First Aid</p>
                <p className="text-sm font-medium">• Crisis Intervention Basics</p>
                <p className="text-sm font-medium">• Platform Admin Tutorial</p>
                <p className="text-sm font-medium">• Data Privacy & FERPA Guide</p>
                <p className="text-sm font-medium">• Quarterly Training Webinars</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Latest from Our Blog</CardTitle>
            <CardDescription>Insights from mental health and education experts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Breaking Down Mental Health Stigma in Indian Schools</h4>
                  <p className="text-xs text-muted-foreground mb-2">March 15, 2024 • 5 min read</p>
                  <p className="text-sm text-muted-foreground">
                    Strategies for creating psychologically safe environments where students feel comfortable seeking help.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">The Role of AI in Early Mental Health Detection</h4>
                  <p className="text-xs text-muted-foreground mb-2">March 10, 2024 • 7 min read</p>
                  <p className="text-sm text-muted-foreground">
                    How machine learning algorithms can identify at-risk students before crisis situations develop.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">FERPA Compliance in Digital Mental Health Platforms</h4>
                  <p className="text-xs text-muted-foreground mb-2">March 5, 2024 • 4 min read</p>
                  <p className="text-sm text-muted-foreground">
                    Understanding privacy requirements when implementing mental health technology in schools.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Building Parental Trust in School Mental Health Programs</h4>
                  <p className="text-xs text-muted-foreground mb-2">February 28, 2024 • 6 min read</p>
                  <p className="text-sm text-muted-foreground">
                    Best practices for communicating with parents about student mental health initiatives.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Webinars & Events */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Upcoming Webinars</CardTitle>
            <CardDescription>Join our experts for live discussions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-start p-4 border border-input rounded-lg">
                <div>
                  <h4 className="font-semibold mb-1">Mental Health Crisis Management in Schools</h4>
                  <p className="text-sm text-muted-foreground mb-1">April 15, 2024 • 2:00 PM IST</p>
                  <p className="text-xs text-muted-foreground">Dr. Priya Sharma, Chief Clinical Officer</p>
                </div>
                <Button size="sm">Register</Button>
              </div>
              
              <div className="flex justify-between items-start p-4 border border-input rounded-lg">
                <div>
                  <h4 className="font-semibold mb-1">Implementing Anonymous Mental Health Screening</h4>
                  <p className="text-sm text-muted-foreground mb-1">April 22, 2024 • 3:00 PM IST</p>
                  <p className="text-xs text-muted-foreground">Rajesh Kumar, Education Specialist</p>
                </div>
                <Button size="sm">Register</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Downloads */}
        <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Free Resource Downloads</CardTitle>
            <CardDescription>Essential guides for school administrators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">🏫 School Mental Health Assessment Kit</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive toolkit to evaluate your school's current mental health support infrastructure.
                </p>
                <Button variant="outline" size="sm">Download Free</Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">📈 ROI Calculator for Mental Health Platforms</h4>
                <p className="text-sm text-muted-foreground">
                  Calculate potential cost savings and benefits for your school's mental health investment.
                </p>
                <Button variant="outline" size="sm">Download Free</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Personalized Guidance?</h2>
          <p className="text-muted-foreground mb-6">Our education specialists can help you choose the right resources</p>
          <Button size="lg" className="mr-4">Schedule Consultation</Button>
          <Button variant="outline" size="lg">Subscribe to Newsletter</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}