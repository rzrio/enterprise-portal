<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "partner".
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property integer $user_creator
 * @property string $url
 * @property string $address
 * @property string $partnership_date
 * @property string $nda
 * @property string $msa
 * @property string $agreement
 * @property integer $tier
 * @property string $tags
 * @property string $categories
 */
class Partner extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'partner';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description', 'user_creator', 'url', 'address', 'partnership_date', 'nda', 'msa', 'agreement', 'tier', 'tags', 'categories'], 'required'],
            [['description', 'address', 'nda', 'msa', 'agreement', 'tags', 'categories'], 'string'],
            [['user_creator', 'tier'], 'integer'],
            [['partnership_date'], 'safe'],
            [['name', 'url'], 'string', 'max' => 40]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'description' => 'Description',
            'user_creator' => 'User Creator',
            'url' => 'Url',
            'address' => 'Address',
            'partnership_date' => 'Partnership Date',
            'nda' => 'Nda',
            'msa' => 'Msa',
            'agreement' => 'Agreement',
            'tier' => 'Tier',
            'tags' => 'Tags',
            'categories' => 'Categories',
        ];
    }

    /**
     * @inheritdoc
     * @return PartnerQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new PartnerQuery(get_called_class());
    }
}
