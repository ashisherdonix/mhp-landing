import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See <span className="text-primary">MindBridge</span> in Action
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a personalized demo to see how we can transform mental health support at your school
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Demo Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Demo</CardTitle>
              <CardDescription>
                30-minute personalized walkthrough with our education specialists
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">First Name *</label>
                    <div className="mt-1">
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md text-sm"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Last Name *</label>
                    <div className="mt-1">
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md text-sm"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email Address *</label>
                  <div className="mt-1">
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-input rounded-md text-sm"
                      placeholder="principal@school.edu"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <div className="mt-1">
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-input rounded-md text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">School Name *</label>
                    <div className="mt-1">
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input rounded-md text-sm"
                        placeholder="Delhi Public School"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Your Role *</label>
                    <div className="mt-1">
                      <select className="w-full px-3 py-2 border border-input rounded-md text-sm">
                        <option>Principal</option>
                        <option>Vice Principal</option>
                        <option>School Counselor</option>
                        <option>IT Administrator</option>
                        <option>Board Member</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Student Count</label>
                    <div className="mt-1">
                      <select className="w-full px-3 py-2 border border-input rounded-md text-sm">
                        <option>Under 500</option>
                        <option>500-1,500</option>
                        <option>1,500-3,000</option>
                        <option>Over 3,000</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Timeline</label>
                    <div className="mt-1">
                      <select className="w-full px-3 py-2 border border-input rounded-md text-sm">
                        <option>Immediate (This quarter)</option>
                        <option>Next quarter</option>
                        <option>Next academic year</option>
                        <option>Just researching</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <div className="mt-1">
                    <textarea 
                      rows={3}
                      className="w-full px-3 py-2 border border-input rounded-md text-sm"
                      placeholder="Tell us about your current mental health support challenges..."
                    />
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Schedule Demo
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-3">
                  <span className="text-primary text-xl">📋</span>
                  <div>
                    <h4 className="font-semibold text-sm">Assessment of Needs</h4>
                    <p className="text-sm text-muted-foreground">We'll understand your school's current mental health challenges</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <span className="text-secondary text-xl">🖥️</span>
                  <div>
                    <h4 className="font-semibold text-sm">Platform Walkthrough</h4>
                    <p className="text-sm text-muted-foreground">Live demonstration of student and admin interfaces</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <span className="text-accent-foreground text-xl">💡</span>
                  <div>
                    <h4 className="font-semibold text-sm">Custom Solutions</h4>
                    <p className="text-sm text-muted-foreground">Tailored recommendations for your school's requirements</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <span className="text-foreground text-xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-sm">Implementation Plan</h4>
                    <p className="text-sm text-muted-foreground">Timeline, training, and next steps discussion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Demo Duration:</span>
                  <span className="text-sm font-semibold">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Implementation:</span>
                  <span className="text-sm font-semibold">30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Training Required:</span>
                  <span className="text-sm font-semibold">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Support:</span>
                  <span className="text-sm font-semibold">24/7</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Immediate Support Available</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Need to speak with someone right away? Our education specialists are standing by.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">📞 +91-800-SCHOOLS</p>
                  <p className="text-sm">📧 schools@mindbridge.in</p>
                  <p className="text-sm">💬 Live chat available 9 AM - 6 PM IST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}