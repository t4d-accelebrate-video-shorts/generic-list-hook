export const ToolFooter = ({ companyName }: { companyName: string }) => {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()}. {companyName}
      </small>
    </footer>
  );
};
