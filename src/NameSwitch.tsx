import React, { useCallback, ChangeEvent, FC } from "react";

type NameSwitchProps = {
  names: string[];
  selectedName: string;
  onNameChange: (name: string) => void;
};

export const NameSwitch: FC<NameSwitchProps> = ({
  names,
  selectedName,
  onNameChange
}) => {
  const handleLocaleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      onNameChange(value),
    [onNameChange]
  );

  return (
    <p>
      Name:{" "}
      <select onChange={handleLocaleChange}>
        {names.map(name => (
          <option key={name} selected={name === selectedName} value={name}>
            {name}
          </option>
        ))}
      </select>
    </p>
  );
};
