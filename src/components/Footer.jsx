
const currentYear = new Date().getFullYear();
const gitHubUrl = "https://github.com/patbeckher";


export default function Footer() {
    return (
        <footer>
            <p>&copy;{currentYear}</p>
            <p><a href={gitHubUrl} target="_blank" rel="noreferrer"></a></p>
        </footer>
    )
}