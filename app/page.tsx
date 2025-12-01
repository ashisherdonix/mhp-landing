import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Shield, Clock, Globe, Home as HomeIcon, User, Users, BookOpen, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section - B2B Focus */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-destructive/15 text-destructive px-4 py-2 rounded-sm text-sm font-semibold border border-destructive/30">
              <span className="text-destructive font-bold">1 in 10</span>
              students need mental health intervention RIGHT NOW
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight px-2">
            Before Crisis Becomes<br/>
            <span className="text-primary">Tragedy</span>
          </h1>
          <div className="max-w-4xl mx-auto mb-6 px-4">
            <p className="text-xl sm:text-2xl text-foreground font-semibold mb-2 leading-tight">
              India's First AI-Powered Mental Health Platform Built for Schools
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Anonymous First</span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">Expert Matching</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">Full Spectrum Care</span>
            </div>
          </div>
          
          {/* Mobile Responsive Triangle Diagram */}
          <div className="mb-8 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="p-8 sm:p-12 lg:p-16">
                {/* Responsive Container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
                  
                  {/* Student - Top Center */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-secondary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-secondary whitespace-nowrap">Student</span>
                  </div>
                  
                  {/* Teacher - Bottom Left */}
                  <div className="absolute bottom-0 left-0 text-center">
                    <span className="text-xs sm:text-sm font-medium text-accent whitespace-nowrap block mb-2 sm:mb-3">Teacher</span>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent" />
                    </div>
                  </div>
                  
                  {/* Parent - Bottom Right */}
                  <div className="absolute bottom-0 right-0 text-center">
                    <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap block mb-2 sm:mb-3">Parent</span>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* EMPHIO Logo - Perfect Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-none">
                        <span className="text-primary">EMP</span>
                        <span className="text-secondary">H</span>
                        <span className="text-accent">IO</span>
                      </span>
                      <div className="w-12 sm:w-14 lg:w-16 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent mt-1.5 sm:mt-2 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Connection Lines - Responsive Calculations */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10">
                    {/* Student to Center - Mobile */}
                    <line className="sm:hidden" x1="128" y1="18" x2="128" y2="115" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="6 3"/>
                    {/* Teacher to Center - Mobile */}
                    <line className="sm:hidden" x1="24" y1="235" x2="115" y2="148" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 3"/>
                    {/* Parent to Center - Mobile */}
                    <line className="sm:hidden" x1="240" y1="235" x2="141" y2="148" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 3"/>
                    
                    {/* Student to Center - SM */}
                    <line className="hidden sm:block lg:hidden" x1="144" y1="20" x2="144" y2="130" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="7 3"/>
                    {/* Teacher to Center - SM */}
                    <line className="hidden sm:block lg:hidden" x1="28" y1="265" x2="130" y2="165" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="7 3"/>
                    {/* Parent to Center - SM */}
                    <line className="hidden sm:block lg:hidden" x1="260" y1="265" x2="158" y2="165" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="7 3"/>
                    
                    {/* Student to Center - LG */}
                    <line className="hidden lg:block" x1="160" y1="20" x2="160" y2="140" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="8 4"/>
                    {/* Teacher to Center - LG */}
                    <line className="hidden lg:block" x1="32" y1="290" x2="140" y2="180" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8 4"/>
                    {/* Parent to Center - LG */}
                    <line className="hidden lg:block" x1="288" y1="290" x2="180" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 4"/>
                  </svg>
                </div>
                
                {/* Labels */}
                <div className="text-center mt-6 sm:mt-8">
                  <span className="text-base sm:text-lg font-semibold text-primary block mb-2">Anonymous First • Expert Matching • Full Spectrum Care</span>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
                    Our holistic approach collaborates directly with parents and teachers, 
                    ensuring comprehensive support for every student's mind wellbeing journey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-xl mx-auto text-sm text-muted-foreground px-4">
            <div className="flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>24/7 Crisis Support</span>
            </div>
            <div className="flex items-center justify-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>Multi-language</span>
            </div>
          </div>
        </div>

        {/* Crisis Statistics - Executive Dashboard */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mental Health Crisis in Indian Schools</h2>
            <p className="text-lg text-muted-foreground font-medium">Critical data every school administrator needs to understand before it's too late</p>
          </div>
          
          {/* Statistics Dashboard */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4">
            <Card className="text-center p-4 sm:p-6 lg:p-8 border-2 border-destructive/40 bg-destructive/5 rounded-sm shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-destructive mb-3">7-10%</div>
              <div className="text-base sm:text-lg font-semibold text-foreground mb-2">Indian Adolescents Affected</div>
              <p className="text-sm sm:text-base text-muted-foreground">struggle with mental health conditions requiring professional intervention</p>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 lg:p-8 border-2 border-destructive/40 bg-destructive/5 rounded-sm shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-destructive mb-3">#1</div>
              <div className="text-base sm:text-lg font-semibold text-foreground mb-2">Global Ranking</div>
              <p className="text-sm sm:text-base text-muted-foreground">India has the highest youth suicide rates worldwide among major economies</p>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 lg:p-8 border-2 border-destructive/40 bg-destructive/5 rounded-sm shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-destructive mb-3">90%+</div>
              <div className="text-base sm:text-lg font-semibold text-foreground mb-2">Underdiagnosed Cases</div>
              <p className="text-sm sm:text-base text-muted-foreground">ADHD and learning disorders go undetected in Indian schools</p>
            </Card>
          </div>

          {/* Business Pain Points - New Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Hidden Business Impact You Can't Ignore</h2>
              <p className="text-lg text-muted-foreground font-medium">Beyond student welfare - the real costs hitting your school's bottom line</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 px-4">
              <Card className="text-center p-6 lg:p-8 border-2 border-amber-500/40 bg-amber-500/5 rounded-sm shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-600 mb-3">15-20%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Academic Performance Drop</div>
                <p className="text-sm text-muted-foreground">Mental health issues directly impact student grades, affecting your school's reputation and board exam results</p>
              </Card>
              
              <Card className="text-center p-6 lg:p-8 border-2 border-orange-500/40 bg-orange-500/5 rounded-sm shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-3">62%</div>
                <div className="text-lg font-semibold text-foreground mb-2">Teachers Feel Unprepared</div>
                <p className="text-sm text-muted-foreground">Teacher burnout increases when they're forced to handle mental health crises without proper training or support</p>
              </Card>
              
              <Card className="text-center p-6 lg:p-8 border-2 border-red-500/40 bg-red-500/5 rounded-sm shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3">₹50L+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Legal & Insurance Costs</div>
                <p className="text-sm text-muted-foreground">One suicide attempt can result in massive legal fees, insurance claims, and reputation damage lasting years</p>
              </Card>
              
              <Card className="text-center p-6 lg:p-8 border-2 border-purple-500/40 bg-purple-500/5 rounded-sm shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-3">NEW</div>
                <div className="text-lg font-semibold text-foreground mb-2">Regulatory Compliance</div>
                <p className="text-sm text-muted-foreground">Education board guidelines now mandate mental health infrastructure - non-compliance risks accreditation</p>
              </Card>
            </div>
          </div>

          {/* Current Solutions Analysis */}
          <Card className="border-2 border-border/60 rounded-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Why Current Solutions Are Failing Your Students</CardTitle>
              <CardDescription>The hidden costs of inadequate mental health infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-destructive pl-4">
                    <h4 className="font-semibold text-foreground mb-1">School Counsellors</h4>
                    <p className="text-muted-foreground text-sm">Most schools don't have one. Those that do are undertrained, overwhelmed, and students don't trust them because they're seen as part of the school administration.</p>
                  </div>
                  <div className="border-l-4 border-l-destructive pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Private Psychiatrists</h4>
                    <p className="text-muted-foreground text-sm">Expensive, inaccessible for most families, and carry massive stigma. Parents won't take their kids because "log kya kahenge."</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-destructive pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Mental Health Apps</h4>
                    <p className="text-muted-foreground text-sm">Generic, Western-designed, no clinical depth, no continuity of care, no integration with the school ecosystem.</p>
                  </div>
                  <div className="border-l-4 border-l-destructive pl-4">
                    <h4 className="font-semibold text-foreground mb-1">Crisis Helplines</h4>
                    <p className="text-muted-foreground text-sm">One-time conversations. No follow-up. No treatment.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-destructive/10 rounded-sm border border-destructive/30">
                <p className="text-center text-lg font-semibold text-destructive">
                  Result: Students suffer in silence. Issues escalate. Legal liability increases. When parents blame you, what's your defense?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Positioning - New Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why The Obvious Alternatives Won't Work</h2>
            <p className="text-lg text-muted-foreground font-medium">You've probably considered these options. Here's why they'll fail your school.</p>
          </div>

          <div className="space-y-6 px-4">
            {/* Hire More Counselors */}
            <Card className="border-2 border-red-400/40 bg-red-400/5 rounded-sm shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-400/15 rounded-sm flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-red-600 mb-2">"Why not just hire more counselors?"</CardTitle>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-red-600">Cost:</span> ₹8-12L/year per counselor + benefits
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Availability:</span> 6-month hiring timeline, limited qualified candidates
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Trust Issue:</span> Students avoid "school staff" - seen as authority figures
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Partner with Local Clinics */}
            <Card className="border-2 border-orange-400/40 bg-orange-400/5 rounded-sm shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-400/15 rounded-sm flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-orange-600 mb-2">"Why not partner with local clinics?"</CardTitle>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-orange-600">Coordination:</span> No integration with school systems, lost referrals
                      </div>
                      <div>
                        <span className="font-semibold text-orange-600">Privacy:</span> Parents involved immediately, students won't go
                      </div>
                      <div>
                        <span className="font-semibold text-orange-600">Inconsistent:</span> Different approaches, no unified care plans
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Use Existing Apps */}
            <Card className="border-2 border-blue-400/40 bg-blue-400/5 rounded-sm shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-400/15 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-600 mb-2">"Why not use existing mental health apps?"</CardTitle>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-blue-600">Generic:</span> Western-designed, no cultural context for Indian students
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">No Integration:</span> Can't connect with school ecosystem or teachers
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600">No Follow-up:</span> One-time interactions, no continuity of care
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12 px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/40 rounded-sm shadow-lg border-2 max-w-4xl mx-auto">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-foreground mb-2">
                  The Bottom Line: Piecemeal solutions create more problems
                </p>
                <p className="text-muted-foreground">
                  You need a comprehensive platform designed specifically for Indian schools, 
                  with anonymous entry, expert matching, and full spectrum care integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Solution */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Solution: Comprehensive Mental Health Infrastructure</h2>
            <p className="text-lg text-muted-foreground">Anonymous First • Expert Matching • Full Spectrum Care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-primary/40 hover:shadow-xl transition-all duration-200 rounded-sm border-2 hover:border-primary/60">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Anonymous First</CardTitle>
                <CardDescription>
                  No login. No name. No pressure. Students explore their wellbeing through AI-powered conversations at their own pace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/40 hover:shadow-xl transition-all duration-200 rounded-sm border-2 hover:border-secondary/60">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 text-secondary">AI</div>
                </div>
                <CardTitle className="text-secondary">Expert Matching</CardTitle>
                <CardDescription>
                  Not just any available slot—the right professional for their specific wellbeing needs, language preference, and growth goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/40 hover:shadow-xl transition-all duration-200 rounded-sm border-2 hover:border-accent/60">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/15 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 text-accent-foreground">+</div>
                </div>
                <CardTitle className="text-accent-foreground">Full Spectrum Care</CardTitle>
                <CardDescription>
                  From counselling to psychiatric care to ecosystem support. Complete wellbeing care with seamless progression.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Student Journey - Simplified Flow */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Student Wellbeing Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">From "I'm just curious" to "I want to grow" — seamless progression with ongoing support</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {/* Step 1 */}
            <Card className="text-center p-4 sm:p-6 border-2 border-primary/40 rounded-sm shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/15 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-3">Anonymous Entry</h3>
              <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <p>• No login required</p>
                <p>• AI conversation</p>
                <p>• Zero commitment</p>
                <p>• Complete privacy</p>
              </div>
              <div className="mt-4 text-xs sm:text-sm font-medium text-primary">"I'm just curious"</div>
            </Card>

            {/* Step 2 */}
            <Card className="text-center p-6 border-2 border-secondary/40 rounded-sm shadow-lg">
              <div className="w-16 h-16 bg-secondary/15 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-sm flex items-center justify-center font-bold">AI</div>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">Smart Matching</h3>
              <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <p>• Confidential account</p>
                <p>• Right specialist match</p>
                <p>• Language preference</p>
                <p>• Online/offline options</p>
              </div>
              <div className="mt-4 text-xs font-medium text-secondary">"I want to talk to someone"</div>
            </Card>

            {/* Step 3 */}
            <Card className="text-center p-6 border-2 border-accent/40 rounded-sm shadow-lg">
              <div className="w-16 h-16 bg-accent/15 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-sm flex items-center justify-center font-bold text-xl">+</div>
              </div>
              <h3 className="text-lg font-bold text-accent-foreground mb-3">Clinical Care</h3>
              <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <p>• Psychiatric evaluation</p>
                <p>• Medication if needed</p>
                <p>• Same platform continuity</p>
                <p>• No case re-explanation</p>
              </div>
              <div className="mt-4 text-xs font-medium text-accent-foreground">"I need medical help"</div>
            </Card>

            {/* Step 4 */}
            <Card className="text-center p-6 border-2 border-amber-500/40 rounded-sm shadow-lg">
              <div className="w-16 h-16 bg-amber-500/15 rounded-sm flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-amber-600 mb-3">Ecosystem Support</h3>
              <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <p>• Parent counselling</p>
                <p>• Teacher intervention</p>
                <p>• Environment changes</p>
                <p>• Holistic approach</p>
              </div>
              <div className="mt-4 text-xs font-medium text-amber-600">"The system needs fixing"</div>
            </Card>
          </div>

          {/* Flow Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-8 h-0.5 bg-border"></div>
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div className="w-8 h-0.5 bg-border"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-8 h-0.5 bg-border"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Why We Win - Simplified */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Schools Choose Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">Built for India. Built to work. Built to scale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Anonymous Access */}
            <Card className="text-center p-4 sm:p-6 lg:p-8 border-2 border-primary/40 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/15 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Anonymous First Contact</h3>
              <div className="text-muted-foreground text-left space-y-2 sm:space-y-3">
                <p className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  No registration barrier
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  Students explore safely
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  Higher engagement rates
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  Trust before commitment
                </p>
              </div>
              <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-primary/10 rounded text-xs sm:text-sm font-medium text-primary">
                "Anonymity is the funnel"
              </div>
            </Card>

            {/* Indian Context */}
            <Card className="text-center p-8 border-2 border-secondary/40 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/15 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Made for India</h3>
              <div className="text-muted-foreground text-left space-y-2 sm:space-y-3">
                <p className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  Multi-language support
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  Cultural sensitivity
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  Indian education context
                </p>
                <p className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  Affordable school pricing
                </p>
              </div>
              <div className="mt-6 p-3 bg-secondary/10 rounded text-sm font-medium text-secondary">
                "Not a Western app translated"
              </div>
            </Card>

            {/* Holistic Care System */}
            <Card className="text-center p-8 border-2 border-accent/40 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              {/* Mini Clean Triangle */}
              <div className="w-16 h-14 mx-auto mb-6 relative">
                {/* Student - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="w-4 h-4 bg-secondary/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-2.5 h-2.5 text-secondary" />
                  </div>
                </div>
                
                {/* Teacher - Bottom Left */}
                <div className="absolute bottom-0 left-0">
                  <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-2.5 h-2.5 text-accent" />
                  </div>
                </div>
                
                {/* Parent - Bottom Right */}
                <div className="absolute bottom-0 right-0">
                  <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-primary" />
                  </div>
                </div>
                
                {/* Central E */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-background border border-primary/40 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">E</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-accent-foreground mb-4">Holistic Approach</h3>
              <div className="text-muted-foreground text-left space-y-2 sm:space-y-3">
                <p className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Unified mental health care
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Student-teacher-parent coordination
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Anonymous to clinical journey
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Complete ecosystem integration
                </p>
              </div>
              <div className="mt-6 p-3 bg-accent/10 rounded text-sm font-medium text-accent-foreground">
                "Holistic care, unified platform"
              </div>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/40 rounded-sm shadow-lg border-2 mx-4">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-4xl mx-auto mb-6 leading-relaxed">
              Every year, thousands of Indian students suffer in silence because they're too scared to ask for help, 
              too ashamed to tell their parents, too distrustful of school authorities. Some of them don't make it.
            </p>
            <p className="text-base sm:text-lg font-medium text-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              We're building the bridge that lets them take the first step without fear—and walks with them all the way to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
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
