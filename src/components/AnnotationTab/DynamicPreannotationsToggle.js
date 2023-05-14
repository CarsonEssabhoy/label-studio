import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { Block } from '../../utils/bem';
import './DynamicPreannotationsToggle.styl';

const injector = inject(({ store }) => {
  const annotation = store.annotationStore?.selected;
  const suggestions = annotation?.suggestions;

  return {
    store,
    annotation,
    suggestions,
    interfaces: Array.from(store?.interfaces),
  };
});

export const DynamicPreannotationsToggle = injector(observer(({
  store,
}) => {
  const enabled = store.hasInterface('auto-annotation') && !store.forceAutoAnnotation;

  useEffect(() => {
    if (!enabled) store.setAutoAnnotation(false);
  }, [enabled]);

  return enabled ? (
    <Block name="dynamic-preannotations">
    </Block>
  ) : null;
}));
