// @flow
import React from 'react';
import * as ICONS from 'constants/icons';
import Icon from 'component/common/icon';
import classnames from 'classnames';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';

type Props = {
  files: Array<WebFile>,
  onChange: (WebFile | void) => void,
};

function FileList(props: Props) {
  const { files, onChange } = props;
  const radio = useRadioState();

  const getFile = (value?: string) => {
    if (files && files.length) {
      return files.find((file: WebFile) => file.name === value);
    }
  };

  React.useEffect(() => {
    if (radio.stops.length) {
      if (!radio.currentId) {
        radio.first();
      } else {
        const first = radio.stops[0].ref.current;
        // First auto-selection
        if (first && first.id === radio.currentId && !radio.state) {
          const file = getFile(first.value);
          // Update state and select new file
          onChange(file);
          radio.setState(first.value);
        }

        if (radio.state) {
          // Find selected element
          const stop = radio.stops.find(item => item.id === radio.currentId);
          const element = stop && stop.ref.current;
          // Only update state if new item is selected
          if (element && element.value !== radio.state) {
            const file = getFile(element.value);
            // Sselect new file and update state
            onChange(file);
            radio.setState(element.value);
          }
        }
      }
    }
  }, [radio, onChange]);

  return (
    <div className={'file-list'}>
      <RadioGroup {...radio} aria-label="files">
        {files.map((entry, index) => {
          const item = radio.stops[index];
          const selected = item && item.id === radio.currentId;

          return (
            <label key={entry.name} className={classnames(selected && 'selected')}>
              <Radio {...radio} value={entry.name} />
              <Icon size={18} selected={selected} icon={selected ? ICONS.COMPLETED : ICONS.CIRCLE} />
              <span>{entry.name}</span>
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}

export default FileList;
