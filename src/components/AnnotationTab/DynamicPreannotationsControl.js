import { inject, observer } from 'mobx-react';
import Input from '../../common/Input/Input';
import { Block } from '../../utils/bem';
import './DynamicPreannotationsControl.styl';

export const DynamicPreannotationsControl = inject('store')(observer(({ store }) => {
  return store.autoAnnotation && !store.forceAutoAcceptSuggestions ? (
    <Block name="dynamic-preannotations-control">
    </Block>
  ) : null;
}));
