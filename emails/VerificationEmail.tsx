import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface ContactEmailProps {
  username: string;
  email: string;
  subject: string;
  body: string;
}

export default function ContactEmail({
  username,
  email,
  subject,
  body,
}: ContactEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{subject}</Preview>
      <Section> 
        <Row>
          <Heading as="h2">{subject}</Heading>
        </Row>
        <Row>
          <Text>{body}</Text>
        </Row>  
        <Row>
          <Heading as="h6">{username}</Heading>
        </Row>     
        <Row>
          <Button
            href={`mailto:${email}?subject=reply to:${subject}`}
            style={{ color: "#61dafb" }}
          >
            Reply to this email
          </Button>
        </Row>
      </Section>
    </Html>
  );
}
