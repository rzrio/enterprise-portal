<?php

namespace frontend\models;

use Yii;

/**
 * This is the model class for table "budget_tier".
 *
 * @property integer $id
 * @property integer $level
 * @property string $description
 */
class BudgetTier extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'budget_tier';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['level', 'description'], 'required'],
            [['level'], 'integer'],
            [['description'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'level' => 'Level',
            'description' => 'Description',
        ];
    }

    /**
     * @inheritdoc
     * @return BudgetTierQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new BudgetTierQuery(get_called_class());
    }
}
