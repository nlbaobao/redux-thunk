import I18N, {createI18n} from '@alife/i18n';
import React from 'react'

const MyI18N = createI18n({
    namespace: 'aa.bb.cc',
    defaultLang: 'en-us',
    langpacks: {
        'en-us': {
            title: '我是一句文案呀~',
            subTitle: '恭喜你，中奖{moneyAmount}万!'
        }
    }
});
// const i18nKeyStr = 'aa.bb.cc.title';


class Demo extends React.Component {
  
    render () {
        console.log(MyI18N);
        console.log(MyI18N.get('aa.bb.cc.subTitle')); // 我是一句文案呀~
        console.log(I18N.get('aa.bb.cc.title')); // 我是一句文案呀~
        console.log(MyI18N.get('subTitle', {moneyAmount: 500})); // 恭喜你，中奖500万!
        console.log(I18N.get('aa.bb.cc.subTitle', {moneyAmount: 500})); // 恭喜你，中奖500万!
        // console.log(I18N.get(i18nKeyStr));

        return (
            <div>
                <MyI18N data={{moneyAmount: 500}}>11</MyI18N>
                <I18N data={{moneyAmount: 500}}>aa.bb.cc.subTitle</I18N>
            </div>
        );
    }
}
export default Demo