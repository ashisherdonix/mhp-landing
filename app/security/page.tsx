import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Security</span> & Compliance
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Enterprise-grade security designed for educational environments
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold">FERPA</h3>
            <p className="text-xs text-muted-foreground">Compliant</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold">ISO 27001</h3>
            <p className="text-xs text-muted-foreground">Certified</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold">GDPR</h3>
            <p className="text-xs text-muted-foreground">Ready</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">🏥</div>
            <h3 className="font-semibold">HIPAA</h3>
            <p className="text-xs text-muted-foreground">Aligned</p>
          </Card>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">🔐 Data Protection</CardTitle>
              <CardDescription>Bank-level security for student data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">• AES-256 encryption at rest and in transit</p>
              <p className="text-sm">• Zero-knowledge architecture</p>
              <p className="text-sm">• Automated data anonymization</p>
              <p className="text-sm">• Regular security audits</p>
              <p className="text-sm">• SOC 2 Type II compliance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-secondary">🎭 Privacy by Design</CardTitle>
              <CardDescription>Anonymous access protects student identity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">• No personal identifiers required</p>
              <p className="text-sm">• Ephemeral session management</p>
              <p className="text-sm">• Anonymized reporting only</p>
              <p className="text-sm">• Optional identity revelation</p>
              <p className="text-sm">• Data minimization practices</p>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Details */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">FERPA Compliance Details</CardTitle>
            <CardDescription>Meeting educational privacy requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">📋 Directory Information</h4>
                <p className="text-sm text-muted-foreground">Minimal data collection with explicit consent protocols</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">🚨 Emergency Disclosures</h4>
                <p className="text-sm text-muted-foreground">Secure crisis intervention with proper authorization</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">📊 Audit Trails</h4>
                <p className="text-sm text-muted-foreground">Complete access logs for compliance reporting</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Infrastructure & Operations</CardTitle>
            <CardDescription>Enterprise-grade hosting and monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">🌐 Hosting & Availability</h4>
                <p className="text-sm text-muted-foreground">• 99.9% uptime SLA</p>
                <p className="text-sm text-muted-foreground">• Multi-region deployment</p>
                <p className="text-sm text-muted-foreground">• Automated failover</p>
                <p className="text-sm text-muted-foreground">• CDN acceleration</p>
                
                <h4 className="font-semibold mt-6">🔍 Monitoring & Alerts</h4>
                <p className="text-sm text-muted-foreground">• 24/7 system monitoring</p>
                <p className="text-sm text-muted-foreground">• Threat detection</p>
                <p className="text-sm text-muted-foreground">• Incident response team</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">💾 Backup & Recovery</h4>
                <p className="text-sm text-muted-foreground">• Daily automated backups</p>
                <p className="text-sm text-muted-foreground">• Point-in-time recovery</p>
                <p className="text-sm text-muted-foreground">• Disaster recovery plan</p>
                <p className="text-sm text-muted-foreground">• Geographic redundancy</p>
                
                <h4 className="font-semibold mt-6">⚡ Performance</h4>
                <p className="text-sm text-muted-foreground">• Sub-second response times</p>
                <p className="text-sm text-muted-foreground">• Auto-scaling infrastructure</p>
                <p className="text-sm text-muted-foreground">• Load balancing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Access Controls */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Access Controls</CardTitle>
            <CardDescription>Role-based permissions for school staff</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary">👨‍💼 Administrators</h4>
                  <p className="text-sm text-muted-foreground mt-2">Full platform access, user management, reporting</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-semibold text-secondary">👩‍🏫 Counselors</h4>
                  <p className="text-sm text-muted-foreground mt-2">Student interaction, case management, limited analytics</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-accent-foreground">👥 Support Staff</h4>
                  <p className="text-sm text-muted-foreground mt-2">Basic monitoring, emergency response, report generation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Questions about Security?</h2>
          <p className="text-muted-foreground mb-6">Our security team is here to address any concerns</p>
          <div className="space-y-2">
            <p className="text-sm">📧 security@mindbridge.in</p>
            <p className="text-sm">📞 +91-800-SECURITY</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}