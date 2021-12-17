/**
 * Build styles
 */
require('./index.css').toString();
const {make} = require('./util');

import IconSpoilerHeader from './assets/spoiler-header.svg';
import IconSpoilerContent from './assets/spoiler-content.svg';

class BlockTypeTunes {

    /**
     * Default type
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_TYPE() {
        return '';
    }

    static get isTune() {
        return true;
    }

    getType(){
        if(!!this.settings?.blocks && this.settings.blocks.hasOwnProperty(this.block.name)){
            return this.settings.blocks[this.block.name]
        }
        if(!!this.settings?.default){
            return this.settings.default
        }
        return BlockTypeTunes.DEFAULT_TYPE
    }
    /**
     *
     * @param api
     * @param data 既に設定されているデータ
     * @param settings tuneに設定項目
     * @param block tuneに設定されてるblock
     */
    constructor({ api, data, config, block}) {
        this.api = api;
        this.block = block;
        /**
         config:{
            default: "right",
            blocks: {
              header: 'center',
              list: 'right'
            }
          },
         */
        this.settings = config;
        this.data = data || { type: this.getType() }
        this.typeSettings = [
            {
                name: 'spoilerHeader',
                label: this.api.i18n.t('Spoiler Header'),
                icon: IconSpoilerHeader
            },
            {
                name: 'spoilerContent',
                label: this.api.i18n.t('Spoiler Content'),
                icon: IconSpoilerContent
            },
        ];
        this._CSS = {
            type: {
                spoilerHeader: 'ce-blocktune-type--spoilerHeader',
                spoilerContent: 'ce-blocktune-type--spoilerContent',
            }
        }
    }

    /**
     * block自体をwrapしてくれる
     * constructorで与えられたalignmentを代入しようとすると、holderが確定してなく
     * renderでやろうとすると、tuneを表示時に処理が走る
     * @param blockContent
     */
    wrap(blockContent) {
        this.wrapper = make("div");
        this.wrapper.classList.toggle(this._CSS.type[this.data.type])
        this.wrapper.append(blockContent)
        return this.wrapper
    }

    /**
     * rendering block tune
     * @returns {*}
     */
    render() {
        const wrapper = make("div");
        this.typeSettings.map(align => {
            const button = document.createElement('button');
            button.classList.add(this.api.styles.settingsButton);
            button.innerHTML = align.icon;
            button.type = 'button';

            button.classList.toggle(this.api.styles.settingsButtonActive, align.name === this.data.type);
            wrapper.appendChild(button);

            this.api.tooltip.onHover(button, align.label, {
                placement: 'top',
                hidingDelay: 500,
            })

            return button
        }).forEach((element, index, elements) => {
            element.addEventListener('click', () => {
                const type = this.typeSettings[index].name;

                this.data.type = type === this.data.type ? null: type;

                elements.forEach((el, i) => {
                    const {name} = this.typeSettings[i];
                    el.classList.toggle(this.api.styles.settingsButtonActive, name === this.data.type);
                    //toggle type style class for block
                    this.wrapper.classList.toggle(this._CSS.type[name], name === this.data.type)
                });
            });
        });
        return wrapper;
    }
    /**
     * save
     * @returns {*}
     */
    save() {
        return this.data;
    }
}

export default BlockTypeTunes;
