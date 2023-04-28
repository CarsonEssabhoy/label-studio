import { IconCopy, IconInfo, IconViewAll, LsSettings, LsTrash } from '../../assets/icons';
import { Button } from '../../common/Button/Button';
import { Tooltip } from '../../common/Tooltip/Tooltip';
import { Elem } from '../../utils/bem';
import { GroundTruth } from '../CurrentEntity/GroundTruth';
import { EditingHistory } from './HistoryActions';
import { confirm } from '../../common/Modal/Modal';
import { useCallback } from 'react';

export const Actions = ({ store }) => {
  const annotationStore = store.annotationStore;
  const entity = annotationStore.selected;
  const saved = !entity.userGenerate || entity.sentUserGenerate;
  const isPrediction = entity?.type === 'prediction';
  const isViewAll = annotationStore.viewingAll;

  const onToggleVisibility = useCallback(() => {
    annotationStore.toggleViewingAllAnnotations();
  }, [annotationStore]);

  return (
    <Elem name="section">
      {store.hasInterface('annotations:view-all') && (
        <Tooltip title="View all annotations">
          <Button
            icon={<IconViewAll />}
            type="text"
            aria-label="View All"
            onClick={() => onToggleVisibility()}
            primary={ isViewAll }
            style={{
              height: 36,
              width: 36,
              padding: 0,
            }}
          />
        </Tooltip>
      )}

      {!isViewAll && store.hasInterface('ground-truth') && <GroundTruth entity={entity}/>}

      {!isPrediction && !isViewAll && store.hasInterface('edit-history') && <EditingHistory entity={entity} />}

      <Button
        icon={<LsSettings/>}
        type="text"
        aria-label="Settings"
        onClick={() => store.toggleSettings()}
        style={{
          height: 36,
          width: 36,
          padding: 0,
        }}
      />

      {store.description && store.hasInterface('instruction') && (
        <Button
          icon={<IconInfo style={{ width: 16, height: 16 }}/>}
          primary={store.showingDescription}
          type="text"
          aria-label="Instructions"
          onClick={() => store.toggleDescription()}
          style={{
            height: 36,
            width: 36,
            padding: 0,
          }}
        />
      )}
    </Elem>
  );
};


