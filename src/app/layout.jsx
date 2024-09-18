export const metadata = {
    title: "Reading List",
    description: "This is a reading list made by JuanValeraDev",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
