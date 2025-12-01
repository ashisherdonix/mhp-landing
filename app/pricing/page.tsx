import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            B2B School <span className="text-primary">Subscriptions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Schools pay an annual subscription. Students, parents, and teachers access services at no additional cost. 
            Pricing that works for Indian schools.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Basic */}
          <Card className="border-primary/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">Basic</CardTitle>
              <CardDescription>For smaller schools</CardDescription>
              <div className="pt-4">
                <span className="text-3xl font-bold">₹5,000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Up to 500 students</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <p>✓ Anonymous screening</p>
                <p>✓ AI professional matching</p>
                <p>✓ Basic admin dashboard</p>
                <p>✓ Email support</p>
                <p>✓ FERPA compliance</p>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Professional */}
          <Card className="border-primary shadow-lg">
            <CardHeader className="text-center pb-2">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs mb-2">
                Most Popular
              </div>
              <CardTitle className="text-lg">Professional</CardTitle>
              <CardDescription>For medium schools</CardDescription>
              <div className="pt-4">
                <span className="text-3xl font-bold">₹12,000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Up to 1,500 students</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <p>✓ Everything in Basic</p>
                <p>✓ Advanced analytics</p>
                <p>✓ Crisis management alerts</p>
                <p>✓ Parent/teacher ecosystem support</p>
                <p>✓ Phone support</p>
                <p>✓ Custom integrations</p>
              </div>
              <Button className="w-full mt-6">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="border-secondary/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">Enterprise</CardTitle>
              <CardDescription>For large schools & districts</CardDescription>
              <div className="pt-4">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">Unlimited students</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <p>✓ Everything in Professional</p>
                <p>✓ White-label solution</p>
                <p>✓ Dedicated account manager</p>
                <p>✓ Custom professional network</p>
                <p>✓ Priority support</p>
                <p>✓ Custom development</p>
              </div>
              <Button className="w-full mt-6" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Schools Pay */}
        <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Why Schools Pay</CardTitle>
            <CardDescription>Clear value propositions for school decision-makers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Duty of Care Obligations</h4>
                  <p className="text-sm text-muted-foreground">Increasingly legally scrutinized. Demonstrate proactive mental health support.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Competitive Differentiation</h4>
                  <p className="text-sm text-muted-foreground">"We have comprehensive mental health support"—powerful in admissions marketing.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Early Intervention</h4>
                  <p className="text-sm text-muted-foreground">Prevents crises that disrupt schools, reduce academic performance, create liability.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Reduced Disciplinary Issues</h4>
                  <p className="text-sm text-muted-foreground">Better mental health = better academic outcomes and classroom behavior.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Documentation & Compliance</h4>
                  <p className="text-sm text-muted-foreground">Automated reporting for accreditation bodies and education boards.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-2">Teacher Support</h4>
                  <p className="text-sm text-muted-foreground">Reduce teacher burnout with professional mental health consultation.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How quickly can we implement?</h4>
              <p className="text-sm text-muted-foreground">Standard implementation takes 30 days including setup, integration, and staff training.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What about data privacy?</h4>
              <p className="text-sm text-muted-foreground">We maintain strict FERPA compliance with end-to-end encryption and anonymized reporting.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can we customize the platform?</h4>
              <p className="text-sm text-muted-foreground">Yes, all plans include basic customization. Enterprise plans offer full white-labeling.</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="mr-4">Schedule Demo</Button>
          <Button variant="outline" size="lg">Talk to Sales</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}