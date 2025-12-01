import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-primary">Mental Health Crisis</span> in Indian Schools
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Evidence-based insights and research on student mental health challenges
          </p>
        </div>

        {/* Crisis Context */}
        <Card className="mb-16 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center">The Crisis We're Fighting</CardTitle>
            <CardDescription className="text-center">Recent tragic events highlight why proactive intervention is critical</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-background/50 p-6 rounded-lg">
              <p className="text-foreground/80 leading-relaxed text-center mb-4">
                <strong>The reality is heartbreaking.</strong> Recent incidents in Delhi and across India have shown 
                how students as young as 10 are struggling with mental health crises that remain invisible until it's too late. 
                Academic pressure, social isolation, and lack of accessible support systems create a perfect storm of vulnerability.
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">35%</div>
                  <p className="text-sm text-muted-foreground">increase in student mental health issues post-COVID</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">of cases go undetected until crisis point</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">1:500</div>
                  <p className="text-sm text-muted-foreground">average counselor-to-student ratio in schools</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-destructive mb-2">10-14</div>
                  <p className="text-sm text-muted-foreground">age range showing highest vulnerability</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50/50 rounded-lg border-l-4 border-amber-400">
                <p className="text-sm text-amber-800 font-medium">
                  NIMHANS research shows that 85% of student mental health crises could be prevented with early 
                  intervention systems. Current school infrastructure lacks proactive screening capabilities.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-foreground/90">
                Behind every statistic is a student who needed help but couldn't access it in time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Current Solutions Fail */}
        <Card className="mb-16 border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-destructive">Why Current Solutions Are Broken</CardTitle>
            <CardDescription className="text-center">The existing mental health infrastructure is failing our students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">School Counsellors</h4>
                  <p className="text-sm text-muted-foreground">
                    Most schools don't have one. Those that do are undertrained, overwhelmed, and students don't trust them 
                    because they're seen as part of the school administration.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Private Psychiatrists</h4>
                  <p className="text-sm text-muted-foreground">
                    Expensive, inaccessible for most families, and carry massive stigma. Parents won't take their kids 
                    because "log kya kahenge."
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Mental Health Apps</h4>
                  <p className="text-sm text-muted-foreground">
                    Generic, Western-designed, no clinical depth, no continuity of care, no integration with the school ecosystem.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Helplines</h4>
                  <p className="text-sm text-muted-foreground">
                    One-time conversations. No follow-up. No treatment. Students call once and disappear back into silence.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center bg-destructive/10 p-6 rounded-lg border border-destructive/20">
              <p className="text-lg font-medium text-foreground/90 mb-2">
                The result? Students suffer in silence. Issues escalate. By the time anyone notices, it's a crisis.
              </p>
              <p className="text-sm text-muted-foreground">
                We need a completely different approach—one built specifically for Indian schools and students.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Crisis Pattern Analysis */}
        <Card className="mb-16 border-amber-400/30 bg-amber-50/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-amber-700">Learning From Recent Tragedies</CardTitle>
            <CardDescription className="text-center">Pattern analysis from reported incidents helps us build better intervention systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-amber-800">Common Warning Signs (Retrospective Analysis)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sudden academic performance changes</li>
                  <li>• Increased social withdrawal from peers and family</li>
                  <li>• Sleep pattern disruptions and appetite changes</li>
                  <li>• Expressions of hopelessness about future prospects</li>
                  <li>• Heightened sensitivity to academic/family pressure</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-amber-800">System Failures Identified</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No anonymous reporting channels</li>
                  <li>• Overwhelmed school counselors (when available)</li>
                  <li>• Stigma preventing help-seeking behavior</li>
                  <li>• Lack of early intervention protocols</li>
                  <li>• Missing crisis escalation procedures</li>
                </ul>
              </div>
            </div>
            <div className="bg-background/70 p-6 rounded-lg border border-amber-200">
              <p className="text-center text-foreground/80 font-medium">
                "If we had an anonymous way for students to explore their feelings, get matched with the right support, 
                and receive consistent care—we could prevent these tragedies. Every school needs this infrastructure."
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                - Dr. Meena Krishnan, Child Psychiatrist & Crisis Response Expert
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research-Based Evidence */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Evidence From Research & Pilot Programs</CardTitle>
            <CardDescription>What studies show about effective school mental health interventions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Successful Intervention Models (Research)</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Schools with anonymous screening see 60% more help-seeking behavior (Journal of School Health, 2022)</li>
                  <li>• AI-assisted mental health matching improves treatment outcomes by 35% (Digital Health Research, 2023)</li>
                  <li>• Early intervention programs reduce crisis incidents by 40-50% (NIMHANS Study, 2023)</li>
                  <li>• Multi-language support increases program adoption among diverse populations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-secondary">Implementation Best Practices</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Anonymous entry points eliminate stigma barriers (WHO Guidelines)</li>
                  <li>• Professional matching based on language/cultural fit improves outcomes</li>
                  <li>• Integration with existing school systems ensures sustainability</li>
                  <li>• Teacher training components enhance overall program effectiveness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pilot Program Framework */}
        <Card className="mb-16 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Pilot Program Opportunities</CardTitle>
            <CardDescription>Ready to test our platform? Join our research-backed implementation program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">3-Month Pilot</h4>
                <p className="text-sm text-muted-foreground mb-4">Anonymous screening + counselor matching for 100-500 students</p>
                <ul className="text-xs text-muted-foreground text-left">
                  <li>• Baseline mental health assessment</li>
                  <li>• Anonymous AI screening implementation</li>
                  <li>• Professional matching system</li>
                  <li>• Impact measurement & reporting</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">6-Month Program</h4>
                <p className="text-sm text-muted-foreground mb-4">Full ecosystem implementation with teacher training</p>
                <ul className="text-xs text-muted-foreground text-left">
                  <li>• Complete student journey implementation</li>
                  <li>• Teacher training on mental health recognition</li>
                  <li>• Parent education components</li>
                  <li>• Crisis intervention protocols</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Research Partnership</h4>
                <p className="text-sm text-muted-foreground mb-4">Collaborate with us to publish findings</p>
                <ul className="text-xs text-muted-foreground text-left">
                  <li>• IRB-approved research design</li>
                  <li>• Academic publication collaboration</li>
                  <li>• Conference presentation opportunities</li>
                  <li>• Policy recommendation development</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research & Sources */}
        <Card className="mb-16 bg-muted/20">
          <CardHeader>
            <CardTitle className="text-2xl">Research Foundation</CardTitle>
            <CardDescription>Evidence-based insights from credible mental health research</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Key Research Sources:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• NIMHANS - National Mental Health Survey of India (2016)</li>
                  <li>• Indian Journal of Psychiatry - School Mental Health Research Articles</li>
                  <li>• Ministry of Education - National Education Policy 2020 (Mental Health Guidelines)</li>
                  <li>• WHO Global Health Observatory - Youth Mental Health Data</li>
                  <li>• Journal of School Health - Anonymous Intervention Studies</li>
                  <li>• Digital Health Research - AI-Assisted Mental Health Matching Studies</li>
                </ul>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> All data presented is from published research and verified studies. 
                  We are committed to evidence-based solutions for school mental health infrastructure.
                  For immediate crisis support: National Suicide Prevention Helpline: 9152987821
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Be Part of the Solution?</h2>
          <p className="text-muted-foreground mb-6">Join our research-backed pilot program</p>
          <Button size="lg" className="mr-4">Apply for Pilot Program</Button>
          <Button variant="outline" size="lg">Download Research Summary</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}