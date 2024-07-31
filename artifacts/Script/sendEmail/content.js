const html = "Sample email contents";
await sendEmail({
    to: "rommel@neptune-software.com",
    from: 'sample@email.com',
    subject: "Sample Subject",
    html
});