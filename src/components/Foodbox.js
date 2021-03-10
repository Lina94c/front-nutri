import React from 'react';
import { List, Avatar, Button, InputNumber, Row, Col } from 'antd';

const FoodBox = ({foods, selectedFoods, setSelectedFoods}) => {

    function onClick(id) {
        const newList = selectedFoods.map(food => {
            if(food.name === id.replace('_', ' ')) {
                food.quantity = parseInt(food.quantity) + parseInt(document.getElementById(id).value);
            }

            return food;
        });

        setSelectedFoods(newList);
    }

    //console.log(foods);
    return (
        <List
            size="small"
            itemLayout="horizontal"
            dataSource={foods}
            renderItem={food => (
                <List.Item
                    extra={
                        <Row className="field has-addons">
                            <Col span={16} className="control">
                                <InputNumber size="large" min={1} defaultValue={1} id={food.name.replace(' ', '_')} className="input" />
                            </Col>
                            <Col span={8} className="control">
                                <Button size="large" type="primary" className="button is-info" onClick={e => onClick(food.name.replace(' ', '_'))}>+</Button>
                            </Col>
                        </Row>
                    }
                >
                    <List.Item.Meta
                        avatar={
                            <Avatar shape="square" size={75} src={food.image} />
                        }
                        title={food.name}
                        description={<small>{food.calories} cal</small>}
                    />
                </List.Item>
            )}
        />
    )
}

export default FoodBox;