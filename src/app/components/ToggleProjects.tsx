import * as ToggleGroup from "@radix-ui/react-toggle-group";
const toggleGroupItemClasses =
"flex px-4 py-2 items-center justify-center bg-[#282A28] leading-4 text-mauve11 first:rounded-l last:rounded-r hover:bg-violet3 focus:z-10  focus:shadow-black focus:outline-none data-[state=on]:bg-[#393B38] data-[state=on]:text-violet12";


interface ToggleProjectsProps {
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleProjects = ({ setIsToggled }: ToggleProjectsProps) => {
  return (
    <div className="m-auto">
      <ToggleGroup.Root
        className="font-light inline-flex space-x-px rounded bg-mauve6"
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
      >
        <ToggleGroup.Item
          onClick={ () => { setIsToggled(false)} }
          className={toggleGroupItemClasses}
          value="left"
          aria-label="Left aligned"
        >
          Web apps
        </ToggleGroup.Item>
        <ToggleGroup.Item
          onClick={ () => { setIsToggled(true) } }
          className={toggleGroupItemClasses}
          value="right"
          aria-label="Right aligned"
        >
          Frontends
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
};

export default ToggleProjects;
