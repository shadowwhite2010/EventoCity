from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','email','full_name', 'password', 'UserPhotoName', 'address'] 
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        print(instance)
        instance.save()
        return instance
 
    
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['EventId', 
                'EventName',
                'userId',
                'sponserId',
                'EventDescription',
                'DateOfEvent',
                'EventVenue',
                'EventCost',
                'EventPhotoName']
        