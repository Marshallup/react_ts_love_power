import React from "react";
import Button from "../../components/Button/Button";
import CreatorEarnings from "../../components/formControlls/CreatorEarnings/CreatorEarnings";
import FormItem from "../../components/formControlls/FormItem/FormItem";
import Input from "../../components/formControlls/Input/Input";
import Select from "../../components/formControlls/Select/Select";
import Switch from "../../components/formControlls/Switch/Switch";
import TextArea from "../../components/formControlls/TextArea/TextArea";

const CreateCollection = () => {
  return (
    <div className="container">
      <h1 className="main__title">Create New Collection</h1>

      <div className="form__add">
        <form>
          <FormItem label='Name' required>
            <Input type='text' placeholder="Item name" required name="name" />
          </FormItem>

          <FormItem label='URL' required subText="Customize your URL on OpenSea. Must only contain lowercase letters, numbers, and hyphens.">
            <Input type='text' placeholder="http://yoursite.io/item/123" name="name" />
          </FormItem>

          <FormItem label='Description' subText="0 of 1000 characters used." required>
            <TextArea required name="description" placeholder="Description..." />
          </FormItem>

          <FormItem label="Category" subText="Select a category will help make your item discoverable.">
            <Select />
          </FormItem>

          <FormItem label="Links" group>
            <Input placeholder="http://yoursite.io/item/123" className="field__item__x--site" />
            <Input placeholder="http://yoursite.io/item/123" className="field__item__x--discord" />
            <Input placeholder="http://yoursite.io/item/123" className="field__item__x--tg" />
          </FormItem>

          <FormItem label="Creator earnings" subText="Earn a percentage of the sale price every time one of your items is sold. Adding multiple addresses may increase gas fees for buyers.">
            <CreatorEarnings />
          </FormItem>

          <FormItem className="field__item--sensitive" label="Explicit & sensitive content" subText="Set this collection as explicit and sensitive content" tooltipText={{ text: 'Lorem ipsum dolor sit amet.' }}>
            <Switch />
          </FormItem>

          <FormItem submit>
            <Button className="btn__send">
              Create
            </Button>
          </FormItem>
        </form>
      </div>
    </div >
  )
}

export default CreateCollection